pipeline {
    agent any

    tools {
        nodejs 'nodejs18' // Make sure this matches the name in Jenkins -> Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],   // change branch if needed
                    userRemoteConfigs: [[
                        url: 'https://github.com/shetty1807/teamcicd.git',
                        credentialsId: 'github-pat'
                    ]]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Test does here"'
            }
        }

        stage('Run App') {
            steps {
                sh 'node server.js & sleep 5'
            }
        }
    }
}
