import active from './environment'

const envConfig = {
    dev: {
        apiUrl: 'http://localhost:8080/api',
    },
    prod: {
        apiUrl: 'ttp://localhost:8080/api',
    }
}

export default envConfig[active];
