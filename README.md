# Decentralized Job Marketplace

## About

Decentralized Job Marketplace is a decentralized application (dApp) powered by Cartesi rollups technology. It allows employers to post job listings and job seekers to apply for jobs, automating the hiring process.

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/get-docker/)
- [Cartesi CLI](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/chimdichukwuchebe/q-jobs-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dApp via `cartesi-cli`
   ```sh
   cartesi build 
   ```
   and
   ```sh
   cartesi run 
   ```

## Usage

Here you can access examples of dApp communication and resource consumption.

### Handlers

* #### createJobListing
  ```js
    description — create a job listing.
    param data — {employer: address ("0x..."), title: string, description: string}
  ```
  data sample
  ```json
    {
        "action":"createJobListing", 
        "data":{
            "employer":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "title":"Software Developer",
            "description":"We are looking for a skilled developer."
        }
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226372656174654a6f624c697374696e67222c202264617461223a7b22656d706c6f796572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20227469746c65223a22536f66747761726520446576656c6f706572222c20226465736372697074696f6e223a22576520617265206c6f6f6b696e6720666f72206120736b696c6c656420646576656c6f7065722e227d7d
  ```
  interact
    - *via `cartesi-cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=

0x7b22616374696f6e223a226372656174654a6f624c697374696e67222c202264617461223a7b22656d706c6f796572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20227469746c65223a22536f66747761726520446576656c6f706572222c20226465736372697074696f6e223a22576520617265206c6f6f6b696e6720666f72206120736b696c6c656420646576656c6f7065722e227d7d
    ```

  response
  ```json
    {
        "status":"ok",
        "message":"Job listing created successfully!",
        "data":{
            "id":"da06c8ff-18aa-4219-bbb4-0d1cfbfc04c6",
            "employer":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "createdAt":1690000730000,
            "title":"Software Developer",
            "description":"We are looking for a skilled developer."
        }
    }
  ```

* #### getAllJobListings
  ```js
    description — get all job listings.
    param data — null
  ```
  data sample
  ```json
    {
        "action":"getAllJobListings"
    }
  ```
  hex sample
  ``` 
    0x7b22616374696f6e223a22676574416c6c4a6f624c697374696e6773227d
  ```
  interact
    - *via `cartesi-cli`*, access your terminal in another window and input these instructions below:
  
    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a22676574416c6c4a6f624c697374696e6773227d
    ```

  response
  ```json
    [
        {
            "id":"da06c8ff-18aa-4219-bbb4-0d1cfbfc04c6",
            "employer":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "createdAt":1690000730000,
            "title":"Software Developer",
            "description":"We are looking for a skilled developer."
        },
        ...
    ]
  ```

## Author

[Victor Ifeanyi Chukwujiobi](https://github.com/victorifeanyichukwujiobi)
