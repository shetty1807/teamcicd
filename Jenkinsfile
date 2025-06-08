pipeline {
  agent any

  tools {
    nodejs 'Node 18'  // Match the name configured in Global Tool Config
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/your-username/your-repo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint' // Optional: ensure you have a lint script
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build' // Optional: if using a build tool
      }
  }
}
