'use strict';

module.exports = {
    env: 'prod',
    port: 300001,
    docker: {
        url: process.env.DOCKER_API_URL || 'https://registry.hub.docker.com/v1/'
    }
}
