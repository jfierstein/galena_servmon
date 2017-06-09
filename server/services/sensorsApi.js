const lm_sensors = require('sensors.js');
const findpid = require('find-process');
const usage = require('usage');
 
const provide = {};

provide.getSensorData = () => {
   return new Promise((resolve, reject) => {
        lm_sensors.sensors((data, err) => { 
            if (err) reject('Error retreiving sensors data', err); 
            resolve(data);
        });
   });
};

provide.getProcessUsage = () => {
   return new Promise((resolve, reject) => {
        findpid('name', 'plex').then((matchingProcesses) => {
            //calculate overall process usage
            let errorCount = 0;
            let resultList = [];
            matchingProcesses.forEach((proc) => {
                usage.lookup(proc.pid, (err, result) => {
                    if(err) errorCount++;
                    else resultList.push({ name: proc.name, usage: result });
                });
            });
            resolve({ results: resultList, errors: errorCount});        
        });
   });
};

module.exports = provide;