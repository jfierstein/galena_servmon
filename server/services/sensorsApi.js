const lm_sensors = require('sensors.js');

const provide = {};

provide.getSensorData = () => {
    lm_sensors.sensors(function (data, error) { 
        if (error) throw error; 
        console.log(data); 
    });
};

module.exports = provide;