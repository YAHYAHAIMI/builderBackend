/**
* @author:  yahay 巴希尔
*/

require('dotenv').config();
const express = require('express');
const app   = express();
const csr   = require('./src/api/constructionSites/constructionSites.router')
const ccr   = require('./src/api/ConstructionCompanies/ConstructionCompanies.router')
const mr    = require('./src/api/Managers/Managers.router')
const eng   = require('./src/api/Engineers/Engineers.router')
const cp    = require('./src/api/Constructionproject/Constructionproject.router')
const m     = require('./src/api/Materials/Materials.router')
const cl    = require('./src/api/ConstructionLogs/ConstructionLogs.router')
const csm   = require('./src/api/ConstructionSiteManagement/ConstructionSiteManagement.router')
const mm    = require('./src/api/ManagerManagement/ManagerManagement.router')
const engm  = require('./src/api/EngineerManagement/EngineerManagement.router')
const pmm   = require('./src/api/ProjectManagerManagement/ProjectManagerManagement.router')
const lmm   = require('./src/api/LogManagerManagement/LogManagerManagement.router')
const mmt   = require('./src/api/MaterialManagement/MaterialManagement.router')
/**
 *  Global Settings
*/
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use('/v1/csr', csr)
app.use('/v1/ccr', ccr)
app.use('/v1/mr', mr)
app.use('/v1/eng',eng)
app.use('/v1/cp', cp)
app.use('/v1/m', m)
app.use('/v1/cl', cl)
app.use('/v1/csm', csm)
app.use('/v1/mm', mm)
app.use('/v1/engm', engm)
app.use('/v1/pmm', pmm)
app.use('/v1/lmm', lmm)
app.use('/v1/mmt', mmt)
/**
 *  listen
*/
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server runing on ${port}...`);
})
