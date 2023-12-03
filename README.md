# grafartreklam
grafartreklam web sitesi

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) account and connection URI
- [Amazon S3](https://aws.amazon.com/s3/) account and access key, secret access key, and bucket information

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies for the server:**

    ```bash
    npm install
    ```

3. **Navigate to the `client` directory and install dependencies for the React client:**

    ```bash
    cd client
    npm install
    ```

4. **Create a `.env` file in the project root and add the following environment variables:**

    ```env
    MONGODB_URI=mongodb+srv://YourMongoDBUsername:YourMongoDBPassword@your-mongodb-uri
    PORT=5000
    NODE_ENV=production
    S3_ACCESS_KEY=YourS3AccessKey
    S3_SECRET_ACCESS_KEY=YourS3SecretAccessKey
    S3_BUCKET_REGION=eu-central-1
    ```

### Usage

1. **Run the server:**

    ```bash
    npm start
    ```

2. **In a separate terminal, navigate to the `client` directory and start the React client:**

    ```bash
    cd client
    npm start
    ```

3. **Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the client application.**
## Built With

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Amazon S3](https://aws.amazon.com/s3/)

## Acknowledgments

