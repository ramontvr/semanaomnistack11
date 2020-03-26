const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Lista uma informação do back-end
 * POST: Criarr uma informaçção no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
  **/

  /**
   * Tipos de parâmetros
   * 
   * QUERY PARAM: Parâmentros nomeados na rota após "?" (filtros, paginação)
   * ROUTE PARAM: Parâmetros utilizados para identificar recursos
   * REQUEST BODY: Corpo da reuqisição utilizado para criar ou alterar
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    * 
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where('')
     */
 


app.listen(3333)