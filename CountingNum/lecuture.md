# DOM(Document Object Model)
---

- DOM: https://www.w3schools.com/js/js_htmldom.asp

- DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.


# getElementById, How to use function
---

- Do not have to write every time for each counters

```JavaScript
function counter(){
    var content = document.getElementById("jasoseol").value;
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}

counter();
```

# Event
---

```JavaScript
<textarea event = eventhandling> </textarea>

```

- ex: <textarea onkeydown ='counter()'> </textarea>

# Condition
---
```JavaScript
function counter(){
    var content = document.getElementById("jasoseol").value;
    if (content.length > 200)
    {
        content = content.substring(0,200);
        document.getElementById('jasoseol').value = content;
    }
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}
```