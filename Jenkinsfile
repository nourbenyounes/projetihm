pipeline {
    agent any

    environment {
        SONARQUBE_SERVER = 'sonarQube devSecOps' // Nom du serveur configuré dans Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Récupération du code source depuis GitHub...'
                checkout scm
            }
        }

        stage('Static Code Analysis - SonarQube') {
            steps {
                echo 'Analyse statique du code avec SonarQube...'
                withSonarQubeEnv("${SONARQUBE_SERVER}") {
                    sh '''
                    sonar-scanner \
                      -Dsonar.projectKey=your_project_key \
                      -Dsonar.sources=./src \
                      -Dsonar.host.url=http://localhost:9000 \
                      -Dsonar.login=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }




    }

    post {
        always {
            echo 'Pipeline terminé. Vérifiez les résultats.'
        }
    }
}
