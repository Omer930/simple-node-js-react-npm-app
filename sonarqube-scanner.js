const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "40e418c28550cfa657d7f2931f45d3773d5af722",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
