---
name: Dashboard
category: Templates
---

```dashboard.html
<aside class="drawer drawer--permanent">
    <div class="drawer__drawer">
        <header class="drawer__header">
            <span class="drawer__header-text">Project FAST</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="dashboard-dashboard.html" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:home"></iconify-icon>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="overview-overview.html" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:account-multiple"></iconify-icon>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:package"></iconify-icon>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:cart"></iconify-icon>Orders
                    </a>
                </li>
                <li class="list__divider"></li>
                <li class="list__item list__item--header">
                    <span class="list__item-secondary-text">Help</span>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:help-circle"></iconify-icon>Help & Feedback
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:information"></iconify-icon>About
                    </a>
                </li>
            </ul>
            <ul class="list list--bottom">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:settings"></iconify-icon>Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<main class="main">
    <header class="app-bar app-bar--fixed">
        <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
        <span class="app-bar__icon"><iconify-icon data-icon="mdi:home"></iconify-icon></span>
        <span class="app-bar__title">Dashboard</span>
        <div class="app-bar__actions">
            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:printer"></iconify-icon></a>
            <div class="menu">
                <a href="#" class="button button--icon button--text menu__toggle" data-menu="#menu"><iconify-icon data-icon="mdi:dots-vertical"></iconify-icon></a>
                <ul id="menu" class="menu__list">
                    <li class="menu__list-item"><a href="#">Menu option 1</a></li>
                    <li class="menu__list-item"><a href="#">Menu option 2</a></li>
                    <li class="menu__list-item"><a href="#">Menu option 3</a></li>
                    <li class="menu__list-divider"></li>
                    <li class="menu__list-item"><a href="#">Menu option 4</a></li>
                    <li class="menu__list-item"><a href="#">Menu option 5</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="main__content">
        <div class="grid">
            <div class="col-desk-6 col-tab-12 col-mob-4">
                <h3>Chart</h2>
                <div class="card col-desk-12">
                    <div class="card__content">
                        <div id="chart_div"></div>
                    </div>
                </div>
            </div>
            <div class="col-desk-6 col-tab-6">
                <h3>Best selling product</h2>
                <div class="row">
                    <div class="card col-desk-8">
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
            <div class="col-desk-4 col-tab-6 col-mob-4">
                <h3>Activity</h2>
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
            <div class="col-desk-8 col-tab-12 col-mob-4">
                <h3>Orders</h2>
                <table class="table--compact" style="--cols:5">
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
                            <td><a href="#" class="button button--icon"><iconify-icon data-icon="mdi:eye"></iconify-icon></a></td>
                        </tr>
                        <tr>
                            <td>#3004 Jon Scott</td>
                            <td>10 hours ago</td>
                            <td>Shipped</td>
                            <td align="right">&euro; 34,50</td>
                            <td><a href="#" class="button button--icon"><iconify-icon data-icon="mdi:eye"></iconify-icon></a></td>
                        </tr>
                        <tr>
                            <td>#3003 Virginia Robbins</td>
                            <td>1 day ago</td>
                            <td>Completed</td>
                            <td align="right">&euro; 120,10</td>
                            <td><a href="#" class="button button--icon"><iconify-icon data-icon="mdi:eye"></iconify-icon></a></td>
                        </tr>
                        <tr>
                            <td>#3002 Elise Heath</td>
                            <td>2 days ago</td>
                            <td>Completed</td>
                            <td align="right">&euro; 80,90</td>
                            <td><a href="#" class="button button--icon"><iconify-icon data-icon="mdi:eye"></iconify-icon></a></td>
                        </tr>
                        <tr>
                            <td>#3001 Tahmine Marriott</td>
                            <td>July 2nd, 2018</td>
                            <td>Completed</td>
                            <td align="right">&euro; 15,95</td>
                            <td><a href="#" class="button button--icon"><iconify-icon data-icon="mdi:eye"></iconify-icon></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
<div class="fab fab--menu" data-tippy-content="Add customer" tabindex="1">
    <a href="single-add.html" class="fab__button"><iconify-icon data-icon="mdi:plus"></iconify-icon></a>
    <ul class="fab__list">
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Add product</span><span class="fab__icon"><iconify-icon data-icon="mdi:package"></iconify-icon></span></a>
        </li>
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Add order</span><span class="fab__icon"><iconify-icon data-icon="mdi:cart"></iconify-icon></span></a>
        </li>
    </ul>
</div>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawMaterial);
    
    function drawMaterial() {
      var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ]);
    
      var materialOptions = {
        chart: {
          title: 'Population of Largest U.S. Cities'
        },
        hAxis: {
          title: 'Total Population',
          minValue: 0,
        },
        vAxis: {
          title: 'City'
        },
        bars: 'horizontal'
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);
    }
</script>
```
