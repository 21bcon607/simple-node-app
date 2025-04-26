pipeline {  
agent any  

environment {  
    DOCKER_CREDENTIAL_ID = 'dockerhub-credentials' // Jenkins credentials id  
    DOCKER_IMAGE = 'mangaldhruv83/simple-node-app:latest'  
    GIT_REPO_URL = 'https://github.com/21bcon607/simple-node-app.git'  
}  

stages {  
     

    stage('Build Docker Image') {  
        steps {  
            // Build the Docker image  
            script {  
                docker.build("${DOCKER_IMAGE}")  
            }  
        }  
    }  

    stage('Push Docker Image') {  
        steps {  
            // Login to Docker Hub  
            withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIAL_ID}", usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {  
                bat "echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin"  
            }  
            // Push the Docker image to Docker Hub  
            bat "docker push %DOCKER_IMAGE%"  
        }  
    }  
}  

post {  
    success {  
        echo 'Pipeline completed successfully!'  
    }  
    failure {  
        echo 'Pipeline failed!'  
    }  
}  
}
