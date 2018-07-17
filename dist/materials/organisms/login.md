---
name: Login
category: Organisms
---

```login.html
<div class="login">
        <div class="form form--s">
            <h1>Login</h1>
            <form method="POST">
                <div class="form__row">
                    <div class="text-field">
                        <input id="username" type="text" name="username" class="text-field__input" placeholder="Enter your username" />
                        <label for="username" class="text-field__label">Username</label>
                    </div>
                </div>
                <div class="form__row">
                    <div class="password-field">
                        <input id="password" type="password" name="password" class="text-field__input" placeholder="Enter your password" />
                        <label for="password" class="text-field__label">Password</label>
                    </div>
                </div>
                <div class="form__row">
                    <div class="checkbox">
                        <input id="cb" type="checkbox" />
                        <label for="cb" class="checkbox__input"></label>
                        <label for="cb" class="checkbox__label">Remember me</label>
                    </div>
                </div>
                <button type="submit" class="button">Login</button>
            </form>
        </div>
    </div>
```