pipeline {
    agent any

    tools {
        // Utilise l'outil SonarQubeScanner pour l'analyse du code
        sonarScanner 'SonarScanner'
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
                withSonarQubeEnv('sonarQube devSecOps') { // Nom configuré dans Jenkins
                    sh '''
                    sonar-scanner \
                        -Dsonar.projectKey=my-project-key \
                        -Dsonar.sources=. \
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
