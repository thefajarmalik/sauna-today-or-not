# Should I go to sauna today?

## Overview

This repository contains a full-stack application created as part of the OP Kiitorata Trainee Program recruitment assignment. The application randomly gives answer to the question:

> “Should I go to sauna today?”
> 

The project is separated into two main components:

- **Frontend:** User interface built with plain HTML and JavaScript.
- **Backend:** Serverless API built using AWS Lambda with TypeScript, containerized via Docker.

## Project Structure

```
.
├── backend/          # Backend service + infrastructure
│   └── app/          # Application source code (TypeScript + Docker)
├── frontend/         # Frontend application + infrastructure
│   └── app/          # HTML and JavaScript files
└── README.md         # Project documentation
```

## Prerequisites

### 1. Command Line Tools

Before running or deploying the project, install Node.js, NPM, and Docker by following their documentation:

- [Node.js & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (required for building the backend TypeScript project)
- [Docker](https://docs.docker.com/engine/install/) (required to build the Lambda container image)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (required to use AWS CDK)
- Install AWS CDK CLI and verify successful installation:
    
    ```jsx
    npm install -g aws-cdk
    cdk --version
    ```


### 2. AWS Setup

- This requires IAM user. It can be created via Identity & Access Management (IAM) in AWS Console. Make sure to create the user with `AdministratorAccess` policy attached. Save the generated Access Key ID and Secret Access Key.
- Ensure your AWS credentials are set up. Enter your Access Key ID and Secret Access Key when asked:
    
    ```jsx
    aws configure
    ```
    
- Verify configuration:
    
    ```jsx
    aws sts get-caller-identity
    ```
    

## Setup & Installation

### **1. Clone the repository**

```bash
git clone https://github.com/thefajarmalik/sauna-today-or-not.git
cd sauna-today-or-not
```

### 2. Install npm dependencies for both frontend and backend

```jsx
(cd frontend && npm install) && (cd backend && npm install)
```

### 3. Bootstrap

```jsx
(cd frontend && cdk bootstrap) && (cd backend && cdk bootstrap)
```

## Deployment

### 1. Deploy backend

```jsx
cd backend
cdk synth
cdk deploy
```

- Copy the returned URL with `/sauna` suffix to point to the API,  e.g. `https://something.on.aws/sauna`

### 2. Deploy frontend

- First, edit `frontend/app/script.js` to point to the deployed Lambda API endpoint.
- Deploy

```jsx
cd backend
cdk synth
cdk deploy
```

### 3. Access application

- Now, you can access the application via the returned URL.


## Destroy / Cleanup

### Destroy only backend

```bash
cd backend && cdk destroy
```

### Destroy only frontend

```bash
cd frontend && cdk destroy
```

### Destroy both

```bash
(cd frontend && cdk destroy) && (cd backend && cdk destroy
```


## License

This project is created for the OP Kiitorata Trainee Program 2026 assignment and is not licensed for public use.