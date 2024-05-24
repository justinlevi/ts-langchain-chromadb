## Getting Started

Clone the repository

## Get the ChromaDB up and running

$ `docker-compose up -d`

## Setup the python environment

$ `cd python`
$ `conda create -n yourenv python=3.11` (or use whatever python env manager you prefer)
$ `conda activate yourenv`
$ `pip install -r requirements.txt`

## Seed the database

Open the `seed_chroma.ipynb` and go through the cells to seed the database with some data from dataset.json

## Download the nodejs depenedencies

// Requirements - I'm running node v21.7.1

$ `npm install`


## Run the nodejs script
$ `npx ts-node src/index.ts`

Your output should look something like this:
```
 langchain-ts-chroma git:(main)✗  🚀 npx ts-node src/index.ts
(node:30586) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Retrieved Documents: [
  Document {
    pageContent: '{"page_content": "This is a food blog Page about making pancakes\\n\\nSource: https://demo.html/b", "metadata": {"title": "This is a food blog Page about making pancakes", "source": "https://demo.html/b", "description": "This is a food blog Page about making pancakes"}, "type": "Document"}',
    metadata: {
      seq_num: 2,
      source: '/Users/justinwinter/projects/langchain-ts-chroma/python/dataset.json'
    }
  },
  Document {
    pageContent: '{"page_content": "This is a food blog\\n\\nSource: https://demo.html/a", "metadata": {"title": "Food Blog", "source": "https://demo.html/a", "description": "This is a food blog"}, "type": "Document"}',
    metadata: {
      seq_num: 1,
      source: '/Users/justinwinter/projects/langchain-ts-chroma/python/dataset.json'
    }
  }
]
```
