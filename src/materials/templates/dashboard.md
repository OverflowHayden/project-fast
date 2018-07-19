---
name: Dashboard
category: Templates
---

```dashboard.html
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
        <span class="app-bar__title">Dashboard</span>
        <div class="app-bar__actions">
            <a href="#" class="button button--icon button--text"><i class="mdi mdi-printer"></i></a>
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
        <div class="grid">
            <div class="row">
                <div class="col__sm--8">
                    <h2>Chart</h2>
                    <div class="atlas-chart margin-bottom" data-id="H13grQLQ" data-width="900" data-height="600">
                        <img src="https://www.theatlas.com/i/atlas_H13grQLQ.png" style="max-width: 100%;" alt="chart" />
                    </div>
                </div>
                <div class="col__sm--4">
                    <h2>Activity</h2>
                    <ul class="list list--demo">
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Added customer: Sommer Gibbons
                                <span class="list__item-secondary-text">July 2nd, 2018</span>
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Added customer: Tahmina Marriott
                                <span class="list__item-secondary-text">July 2nd, 2018</span>
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Added customer: Elise Heath
                                <span class="list__item-secondary-text">July 2nd, 2018</span>
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Added customer: Virginia Robbins
                                <span class="list__item-secondary-text">July 2nd, 2018</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col__sm--4">
                    <h2>Best selling product</h2>
                    <div class="row">
                        <div class="card col__xs--12">
                            <figure class="card__image"><img src="https://baconmockup.com/500/335" alt="Bacon" /></figure>
                            <div class="card__content">
                                <h2 class="card__title">Bacon</h2>
                                <div class="card__actions">
                                    <a href="#" class="button button--compact">Show all products</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col__sm--4">
                    <div class="margin-bottom">
                        <div class="btcwdgt-chart" bw-theme="light"></div>
                    </div>
                </div>
                <div class="col__sm--8">
                    <h2>Orders</h2>
                    <table style="--cols:5">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>State</th>
                                <th align="right">Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#3005 John Doe</td>
                                <td>2 hours ago</td>
                                <td>Pending</td>
                                <td align="right">&euro; 78,65</td>
                                <td><a href="#" class="button button--icon"><i class="mdi mdi-eye"></i></a></td>
                            </tr>
                            <tr>
                                <td>#3004 Jon Scott</td>
                                <td>10 hours ago</td>
                                <td>Shipped</td>
                                <td align="right">&euro; 34,50</td>
                                <td><a href="#" class="button button--icon"><i class="mdi mdi-eye"></i></a></td>
                            </tr>
                            <tr>
                                <td>#3003 Virginia Robbins</td>
                                <td>1 day ago</td>
                                <td>Completed</td>
                                <td align="right">&euro; 120,10</td>
                                <td><a href="#" class="button button--icon"><i class="mdi mdi-eye"></i></a></td>
                            </tr>
                            <tr>
                                <td>#3002 Elise Heath</td>
                                <td>2 days ago</td>
                                <td>Completed</td>
                                <td align="right">&euro; 80,90</td>
                                <td><a href="#" class="button button--icon"><i class="mdi mdi-eye"></i></a></td>
                            </tr>
                            <tr>
                                <td>#3001 Tahmine Marriott</td>
                                <td>July 2nd, 2018</td>
                                <td>Completed</td>
                                <td align="right">&euro; 15,95</td>
                                <td><a href="#" class="button button--icon"><i class="mdi mdi-eye"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="fab fab--menu" title="Add customer" data-tippy-placement="left" data-tippy-theme="light" tabindex="1">
    <a href="single-add.html" class="fab__button"><i class="mdi mdi-plus"></i></a>
    <ul class="fab__list">
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Add product</span><i class="fab__icon mdi mdi-package"></i></a>
        </li>
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Add order</span><i class="fab__icon mdi mdi-cart"></i></a>
        </li>
    </ul>
</div>
<script src="https://www.theatlas.com/javascripts/atlas.js"></script>
<script>
  (function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
</script>
```
