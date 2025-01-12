pipeline {
    agent any

    tools {
        // Assure-toi que SonarScanner est configuré dans Jenkins
        sonarQube 'sonarQube devSecOps'
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
