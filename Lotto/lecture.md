# Intro: how to use JS
---

## Use html
---

In general, JavaScript are written just before the `</body>` 

## Use Js file
---
```html
<script src='filename.js'>
</script>
```

# Semicolon and Comment
---

- Semicolon: usually used to tell a line of code is ended

# Making var
---

```JavaScript
var num =parseInt(Math.random() * 45 + 1);
document.write(num);
```

# Sort numbers

```JavaScript
// document.write(num);
var lotto = [];
while (lotto.length < 6) {
    var a =parseInt(Math.random() * 45 + 1);

    if  (lotto.indexOf(a) == -1)
    {
        lotto.push(a);
    }
        
}

lotto.sort((a,b) => a-b); //Ascending order

document.write(lotto);
```

# 