/**
* @author:  yahay 巴希尔
*/

module.exports  =  {

    /**
     * check empty
     */
    isEmpty: (data) => {
        return Object.values(data).every(prop => prop !== '' && prop !== null);
    }
}