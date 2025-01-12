pipeline {
    agent any

    environment {
        SONARQUBE = 'sonarQube devSecOps' // Define the SonarQube server (configured in Jenkins)
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub using the configuration in Jenkins
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies (ensure npm is installed on the Jenkins agent)
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run your unit tests (replace with your test framework command)
                script {
                    bat 'npm test'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                // Run SonarQube analysis (ensure the SonarQube plugin is installed in Jenkins)
                script {
                    bat '''
                        npm run sonar:scan
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                // Build your project (optional step, depending on your needs)
                script {
                    bat 'ng build --prod'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Optional: Deploy your application (if needed)
                echo 'Deploying the application...'
            }
        }
    }

    post {
        success {
            echo 'Build and analysis successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
