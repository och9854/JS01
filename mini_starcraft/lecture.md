# jQuery basic
---

## Pros
---

- Easy syntax
- Easy API
- Cross Browsing


# jQuery Event
---


- with jQuery onclick -> execute hello() function
```JavaScript
<button id='click' onclick='hello();'> click here </button>

// ...

$('#click").click(hello);
```

# Anonymous function
---

- What is Anonymous function?
- An anonymous function is a function that was declared without any named identifier to refer to it. The advantage of anonymous function is that it does not have to be stored in a separate file.

```JavaScript
$('#click').click(function(){
            console.log('hello');
        });
```

# fadeIn
---

```JS
$('#drone').click(function(){
    $("#spit").fadeIn();
});
```

# .animate()
---
```JS
            $('#spit').animate({left: "+=250"}); //왼쪽에서 오른쪽으로 250만큼

```

# Callback
---

Sometimes when you run codes, you might expect all codes are ran in sequence. But sometimes it does not work like that. 

