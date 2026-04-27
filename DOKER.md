# Sesión de docker y prisma

1 - En la raiz creamos el archivo `docker-compose.yml` y dentro el siguiente codigo:

```yml
services:
  db:
    image: postgres:16-alpine
    container_name: nextjs-blog-postgres
    restart: unless-stopped
    ports:
      - "5432:5432" # Postgres escolta al teu ordinador a localhost:5432
    environment:
      POSTGRES_USER: blog # Nombre del usuario
      POSTGRES_PASSWORD: blogsecret # La contraseña
      POSTGRES_DB: blogdb # Nombre de la base de datos
    volumes:
      - pgdata:/var/lib/postgresql/data # les dades persisteixen encara que aturis el contenidor (no es perden en reiniciar).

volumes:
  pgdata:
```

2 - Levantamos el servicio desde la raiz del proyecto

```cmd
docker compose up -d
```

3 - Comprovamos que el contenedor docker esta activo:

```cmd
docker compose ps
```

4 - Para parar el contenedor:

```
docker compose down
```

5 - Creamos nuestro archivo .env con la siguiente variable:

```.env
DATABASE_URL="postgresql://blog:blogsecret@localhost:5432/blogdb?schema=public"
```

6 - Instalamos prisma y lo inicializamos:

```cmd
npm install @prisma/client
npm install pg @prisma/adapter-pg
npm install prisma --save-dev // Hace que la dependencia sea de desarrollo
npx prisma init
```

7 - Creamos nuestro primer modelo, para eso editamos nuestro archivo schema.prisma y añadimos lo siguiente:

```.prisma
model Post {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  excerpt   String?
  content   String
  createdAt DateTime @default(now())
}
```

8 - Aplicaremos nuestra primera migración:

```cmd
npx prisma migrate dev --name init_posts
```

9 - Creamos un archivo seed.js dentro de nuestra carpeta primsa y ponemos los siguientes datos:

```js
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.post.createMany({
    data: [
      {
        slug: "el-meu-primer-post",
        title: "El meu primer post",
        excerpt: "Introducció al blog.",
        content: "Aquest és el contingut complet del primer article.",
      },
      {
        slug: "nextjs-app-router",
        title: "Next.js App Router",
        excerpt: "Rutes i layouts.",
        content: "Aquí expliques com funciona l'App Router.",
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
```
