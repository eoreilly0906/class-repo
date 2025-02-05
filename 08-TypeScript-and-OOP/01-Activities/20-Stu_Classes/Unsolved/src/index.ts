// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', 'createdOn', and 'comments'.
class BlogPost {
    authorName: string
    title: string
    text: string
    createdOn: string
    comments: BlogComment[]
    printMetaData: () => void

    constructor(authorName: string, title: string, text: string, createdOn: string, comments: BlogComment[] = []) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = comments;
        this.printMetaData = () => {
            console.log(`Created by ${this.authorName} on ${this.createdOn}`);
        };
    }
    addComment(comment: BlogComment) : void {
        this.comments.push(comment);
    }
}

// TODO: Use a default parameter to set 'comments' to an empty array if no value is provided.

// TODO: Give BlogPost a method called printMetaData() with a `void` return type that logs a message saying 'Created by (authorName) on (createdOn)'.



// TODO: Give Blog Post a method called addComment() with a `void` return type that takes in a comment and adds it to the comments array.


// TODO: Create a class constructor called BlogComment that takes in 'authorName', 'text', and 'createdOn'.
class BlogComment {
    authorName: string
    text: string
    createdOn: string
    printMetaData: () => void

    constructor(authorName: string, text: string, createdOn: string) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        this.printMetaData = () => {
            console.log(`Created by ${this.authorName} on ${this.createdOn} with ${this.text}`);
        };
    }
}

// TODO: Give BlogComment a method called printMetaData() with a `void` return type that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.



// TODO: Create a new object using the BlogComment class constructor.
const comment = new BlogComment('eddie', 'blahhhh', '02/05/2025'); 


// TODO: Create a new object using the BlogPost class constructor and omit a value for 'comments'.
const post = new BlogPost('eddie', 'my first post', 'blahhhh', '02/05/2025', []);


// TODO: Use the addComment() method on your newly created BlogPost to add your newly created BlogComment to its comments array.
post.addComment(comment);

// TODO: Print the meta data for both the BlogPost and the BlogComment to the console.
console.log(post.printMetaData());
console.log(comment.printMetaData());