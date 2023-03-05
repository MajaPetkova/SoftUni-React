import "./App.css";
import { Header } from "./components/Header";
// import  Header from "./components/Header";
import {BookList}  from "./components/BookList"
import { Timer } from "./components/Timer";

function App() {
	const books = [
			{
				"isbn":"9781593279509",
				"title":"Eloquent JavaScript, Third Edition",
				"subtitle":"A Modern Introduction to Programming",
				"author":"Marijn Haverbeke",
				"published":"2018-12-04T00:00:00.000Z",
				"publisher":"No Starch Press",
				"pages":472,
				"description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
				"website":"http://eloquentjavascript.net/"
			},
			{
				"isbn":"9781491943533",
				"title":"Practical Modern JavaScript",
				"subtitle":"Dive into ES6 and the Future of JavaScript",
				"author":"Nicolás Bevacqua",
				"published":"2017-07-16T00:00:00.000Z",
				"publisher":"O'Reilly Media",
				"pages":334,
				"description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
				"website":"https://github.com/mjavascript/practical-modern-javascript"
			},
			{
				"isbn":"9781593277574",
				"title":"Understanding ECMAScript 6",
				"subtitle":"The Definitive Guide for JavaScript Developers",
				"author":"Nicholas C. Zakas",
				"published":"2016-09-03T00:00:00.000Z",
				"publisher":"No Starch Press",
				"pages":352,
				"description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
				"website":"https://leanpub.com/understandinges6/read"
			},
			{
				"isbn":"9781449365035",
				"title":"Speaking JavaScript",
				"subtitle":"An In-Depth Guide for Programmers",
				"author":"Axel Rauschmayer",
				"published":"2014-04-08T00:00:00.000Z",
				"publisher":"O'Reilly Media",
				"pages":460,
				"description":"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
				"website":"http://speakingjs.com/"
			},
			{
				"isbn":"9781449331818",
				"title":"Learning JavaScript Design Patterns",
				"subtitle":"A JavaScript and jQuery Developer's Guide",
				"author":"Addy Osmani",
				"published":"2012-08-30T00:00:00.000Z",
				"publisher":"O'Reilly Media",
				"pages":254,
				"description":"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
				"website":"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
			},
			{
				"isbn":"9798602477429",
				"title":"You Don't Know JS Yet",
				"subtitle":"Get Started",
				"author":"Kyle Simpson",
				"published":"2020-01-28T00:00:00.000Z",
				"publisher":"Independently published",
				"pages":143,
				"description":"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
				"website":"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
			},
			{
				"isbn":"9781484200766",
				"title":"Pro Git",
				"subtitle":"Everything you neeed to know about Git",
				"author":"Scott Chacon and Ben Straub",
				"published":"2014-11-18T00:00:00.000Z",
				"publisher":"Apress; 2nd edition",
				"pages":458,
				"description":"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
				"website":"https://git-scm.com/book/en/v2"
			},
			
		];
	
  return (
    <div className="App">
      <header className="App-header">
        <h1> <span className="fancy-text">Hello</span>  React</h1>
		<Header>Book Library</Header>
		<Timer start={1} />
		<Timer start={30} />
		<Timer start={85} />
		<BookList bookList={books}/>
      </header>
    </div>
  );
}

export default App;
