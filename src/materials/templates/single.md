---
name: Single
category: Templates
---

```add.html
<aside class="drawer drawer--permanent">
    <div class="drawer__drawer drawer--dark">
        <header class="drawer__header">
            <span class="drawer__header-text">Project FAST</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="dashboard-dashboard.html" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-home"></i>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="overview-overview.html" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-account-multiple"></i>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-package"></i>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-cart"></i>Orders
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<main class="main">
    <header class="app-bar">
        <button class=app-bar__nav-toggle><i class="mdi mdi-menu"></i></button>
        <span class="app-bar__title">New Customer</span>
        <div class="app-bar__actions">
            <a href="overview-overview.html" class="button button--text"><i class="mdi mdi-check"></i>Submit</a>
            <a href="overview-overview.html" class="button button--text"><i class="mdi mdi-close"></i>Cancel</a>
            <div class="menu">
                <a href="#" class="button button--icon button--text menu__toggle" data-menu="#menu"><i class="mdi mdi-dots-vertical"></i></a>
                <ul id="menu" class="menu__list">
                    <li class="menu__list-item"><a href="#">Help</a></li>
                    <li class="menu__list-item"><a href="#">About</a></li>
                    <li class="menu__list-item"><a href="#">Settings</a></li>
                    <li class="menu__list-divider"></li>
                    <li class="menu__list-item"><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="main__content">
        <div class="form form--m">
            <form>
                <div class="form__row">
                    <div class="text-field">
                        <input id="firstname" type="text" name="firstname" class="text-field__input" placeholder="Enter your firstname" />
                        <label for="firstname" class="text-field__label">Firstname *</label>
                    </div>
                </div>
                <div class="form__row">
                    <div class="text-field">
                        <input id="lastname" type="text" name="lastname" class="text-field__input" placeholder="Enter your lastname" />
                        <label for="lastname" class="text-field__label">Lastname *</label>
                    </div>
                </div>
                <div class="form__row grid">
                    <div class="col__sm--4">
                        <div class="select-field field--outline">
                            <select id="select" name="select" class="select-field__input">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <label for="select" class="select-field__label">Day</label>
                            <span class="field__helper">Select an option</span>
                        </div>
                    </div>
                    <div class="col__sm--4">
                        <div class="select-field field--outline">
                            <select id="select" name="select" class="select-field__input">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <label for="select" class="select-field__label">Month</label>
                            <span class="field__helper">Select an option</span>
                        </div>
                    </div>
                    <div class="col__sm--4">
                        <div class="select-field field--outline">
                            <select id="select" name="select" class="select-field__input">
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                            </select>
                            <label for="select" class="select-field__label">Year</label>
                            <span class="field__helper">Select an option</span>
                        </div>
                    </div>
                </div>
                <div class="form__row grid">
                    <div class="col__sm--9">
                        <div class="text-field field--fill">
                            <input id="street" type="text" name="street" class="text-field__input" placeholder="Enter your street" />
                            <label for="street" class="text-field__label">Street</label>
                        </div>
                    </div>
                    <div class="col__sm--3">
                        <div class="text-field field--fill">
                            <input id="housenr" type="housenr" name="housenr" class="text-field__input" placeholder="Enter your house number" />
                            <label for="housenr" class="text-field__label">House number</label>
                        </div>
                    </div>
                </div>
                <div class="form__row grid">
                    <div class="col__sm--4">
                        <div class="text-field field--fill">
                            <input id="zipcode" type="text" name="zipcode" class="text-field__input" placeholder="Enter your zipcode" />
                            <label for="zipcode" class="text-field__label">Zipcode</label>
                        </div>
                    </div>
                    <div class="col__sm--8">
                        <div class="text-field field--fill">
                            <input id="city" type="text" name="city" class="text-field__input" placeholder="Enter your city" />
                            <label for="city" class="text-field__label">City</label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="button">Submit</button>
                <a href="overview-overview.html" class="button button--text">Cancel</a>
            </form>
        </div>
    </div>
</main>
```