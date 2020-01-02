---
name: Overview
category: Templates
---

```overview.html
<aside class="drawer drawer--permanent">
    <div class="drawer__drawer drawer--dark">
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
    <header class="app-bar">
        <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
                <span class="app-bar__title">Customers</span>
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
        <div class="grid margin-bottom--2x">
            <table class="data-table table--fullwidth" style="--cols:9">
                <thead>
                    <tr class="data-table__head">
                        <th colspan="9">
                            <a href="single-add.html" class="data-table__action">Add</a>
                            <a href="#" class="data-table__filter"><i class="mdi mdi-filter-variant"></i></a>
                            <div class="data-table__selection">
                                <span class="data-table__selected"><span class="data-table__selected-count"></span> selected</span>
                                <div class="data-table__buttons">
                                    <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div class="checkbox">
                                <input id="cb_0" type="checkbox" />
                                <label for="cb_0" class="checkbox__input"></label>
                            </div>
                        </th>
                        <th width="8%"><a href="#"><iconify-icon data-icon="mdi:arrow-down"></iconify-icon>ID</a></th>
                        <th><a href="#">Name</a></th>
                        <th><a href="#">Address</a></th>
                        <th><a href="#">Zipcode</a></th>
                        <th><a href="#">City</a></th>
                        <th width="16%"><a href="#">Email</a></th>
                        <th width="16%"><a href="#">Phone</a></th>
                        <th width="10%"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_1" type="checkbox" />
                                <label for="cb_1" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>1</td>
                    	<td>Denise</td>
                    	<td>Ap #166-5189 Ac Ave</td>
                    	<td>7401</td>
                    	<td>Aalst</td>
                    	<td>auctor.ullamcorper@loremloremluctus.ca</td>
                    	<td>(01794) 049314</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_2" type="checkbox" />
                                <label for="cb_2" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>2</td>
                    	<td>Nerea</td>
                    	<td>P.O. Box 557, 7718 Ornare. St.</td>
                    	<td>24252</td>
                    	<td>Hannut</td>
                    	<td>eu.odio@Integer.com</td>
                    	<td>055 3958 0478</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_3" type="checkbox" />
                                <label for="cb_3" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>3</td>
                    	<td>Amal</td>
                    	<td>P.O. Box 885, 4648 Duis St.</td>
                    	<td>414089</td>
                    	<td>Stalhille</td>
                    	<td>urna.Nullam.lobortis@quispede.edu</td>
                    	<td>076 8926 4202</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_4" type="checkbox" />
                                <label for="cb_4" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>4</td>
                    	<td>Nissim</td>
                    	<td>P.O. Box 263, 6022 Non, Road</td>
                    	<td>77321</td>
                    	<td>Vielsalm</td>
                    	<td>Integer.sem@maurisa.edu</td>
                    	<td>(01729) 005592</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_5" type="checkbox" />
                                <label for="cb_5" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>5</td>
                    	<td>Kadeem</td>
                    	<td>692-1381 Nisl. Street</td>
                    	<td>2985</td>
                    	<td>Sant'Angelo Limosano</td>
                    	<td>eget.metus@aliquet.ca</td>
                    	<td>076 2778 9444</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_6" type="checkbox" />
                                <label for="cb_6" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>6</td>
                    	<td>Cyrus</td>
                    	<td>Ap #550-5173 Eu Rd.</td>
                    	<td>68281</td>
                    	<td>Mjölby</td>
                    	<td>non@dolorQuisque.co.uk</td>
                    	<td>07105 825031</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_7" type="checkbox" />
                                <label for="cb_7" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>7</td>
                    	<td>Cameron</td>
                    	<td>P.O. Box 343, 4726 Erat Street</td>
                    	<td>90727</td>
                    	<td>Morro Reatino</td>
                    	<td>non.egestas.a@eterosProin.edu</td>
                    	<td>076 3796 8358</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_8" type="checkbox" />
                                <label for="cb_8" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>8</td>
                    	<td>Bianca</td>
                    	<td>802-5595 Luctus Street</td>
                    	<td>8416</td>
                    	<td>Marchihue</td>
                    	<td>malesuada.Integer.id@sitametrisus.org</td>
                    	<td>(0111) 449 0387</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_9" type="checkbox" />
                                <label for="cb_9" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>9</td>
                    	<td>Kevin</td>
                    	<td>960-9553 Integer Av.</td>
                    	<td>2711</td>
                    	<td>Nives</td>
                    	<td>In.nec@placeratCrasdictum.com</td>
                    	<td>0800 1111</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_10" type="checkbox" />
                                <label for="cb_10" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>10</td>
                    	<td>Graiden</td>
                    	<td>P.O. Box 397, 6454 Feugiat Ave</td>
                    	<td>48091</td>
                    	<td>Bruckneudorf</td>
                    	<td>sagittis@apurus.co.uk</td>
                    	<td>(0131) 504 1652</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_11" type="checkbox" />
                                <label for="cb_11" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>11</td>
                    	<td>Grace</td>
                    	<td>4357 A Av.</td>
                    	<td>618556</td>
                    	<td>Frankfort</td>
                    	<td>tellus.eu.augue@natoque.com</td>
                    	<td>07553 358259</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_12" type="checkbox" />
                                <label for="cb_12" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>12</td>
                    	<td>Jessamine</td>
                    	<td>P.O. Box 988, 5937 Ullamcorper. St.</td>
                    	<td>81220-383</td>
                    	<td>Wörgl</td>
                    	<td>dui.nec@loremloremluctus.edu</td>
                    	<td>(016977) 9735</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_13" type="checkbox" />
                                <label for="cb_13" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>13</td>
                    	<td>Bruno</td>
                    	<td>P.O. Box 410, 4525 Non Av.</td>
                    	<td>891208</td>
                    	<td>Nieuwenrode</td>
                    	<td>arcu.imperdiet.ullamcorper@dapibus.com</td>
                    	<td>(011086) 56554</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_14" type="checkbox" />
                                <label for="cb_14" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>14</td>
                    	<td>Rana</td>
                    	<td>Ap #713-950 Non Ave</td>
                    	<td>25844</td>
                    	<td>Hengelo</td>
                    	<td>pede@sem.co.uk</td>
                    	<td>056 3240 8137</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_15" type="checkbox" />
                                <label for="cb_15" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>15</td>
                    	<td>Nevada</td>
                    	<td>P.O. Box 263, 2809 Interdum. Avenue</td>
                    	<td>32085-733</td>
                    	<td>Pulderbos</td>
                    	<td>nascetur@facilisislorem.net</td>
                    	<td>0821 957 4703</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_16" type="checkbox" />
                                <label for="cb_16" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>16</td>
                    	<td>Rajah</td>
                    	<td>315-1393 Mus. Ave</td>
                    	<td>2987 BM</td>
                    	<td>Lo Barnechea</td>
                    	<td>risus.odio.auctor@ornareegestasligula.edu</td>
                    	<td>07623 926912</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_17" type="checkbox" />
                                <label for="cb_17" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>17</td>
                    	<td>Inez</td>
                    	<td>P.O. Box 237, 3953 Ultrices Rd.</td>
                    	<td>2699</td>
                    	<td>Haldia</td>
                    	<td>aliquam@tinciduntaliquam.co.uk</td>
                    	<td>07624 541197</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_18" type="checkbox" />
                                <label for="cb_18" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>18</td>
                    	<td>Porter</td>
                    	<td>Ap #692-7763 Pede. Av.</td>
                    	<td>20910</td>
                    	<td>La Roche-sur-Yon</td>
                    	<td>nonummy@pharetraNam.co.uk</td>
                    	<td>0903 136 8883</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_19" type="checkbox" />
                                <label for="cb_19" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>19</td>
                    	<td>Finn</td>
                    	<td>530 Amet, Avenue</td>
                    	<td>249123</td>
                    	<td>Bhilwara</td>
                    	<td>hendrerit@dolor.ca</td>
                    	<td>0970 510 3302</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_20" type="checkbox" />
                                <label for="cb_20" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>20</td>
                    	<td>Hayley</td>
                    	<td>5892 Risus. Road</td>
                    	<td>68-955</td>
                    	<td>Castiglione Messer Raimondo</td>
                    	<td>ante.ipsum@liberomauris.com</td>
                    	<td>0800 1111</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_21" type="checkbox" />
                                <label for="cb_21" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>21</td>
                    	<td>Yuri</td>
                    	<td>Ap #181-8167 Egestas St.</td>
                    	<td>2898</td>
                    	<td>Antuco</td>
                    	<td>ipsum.Suspendisse@massaVestibulumaccumsan.org</td>
                    	<td>0500 472683</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_22" type="checkbox" />
                                <label for="cb_22" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>22</td>
                    	<td>Wallace</td>
                    	<td>P.O. Box 458, 9511 Nonummy. Street</td>
                    	<td>CR2E 2AO</td>
                    	<td>Lisciano Niccone</td>
                    	<td>ac@egestas.com</td>
                    	<td>(016977) 0379</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_23" type="checkbox" />
                                <label for="cb_23" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>23</td>
                    	<td>Zachary</td>
                    	<td>Ap #563-952 Quisque Street</td>
                    	<td>75613</td>
                    	<td>San Cristóbal de la Laguna</td>
                    	<td>pede.nec.ante@parturient.com</td>
                    	<td>0800 639355</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_24" type="checkbox" />
                                <label for="cb_24" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>24</td>
                    	<td>Neve</td>
                    	<td>P.O. Box 159, 9104 Interdum. St.</td>
                    	<td>1858</td>
                    	<td>Ferlach</td>
                    	<td>nisl@neque.edu</td>
                    	<td>07900 610106</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_25" type="checkbox" />
                                <label for="cb_25" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>25</td>
                    	<td>Gregory</td>
                    	<td>P.O. Box 349, 9469 Mauris, Ave</td>
                    	<td>40-838</td>
                    	<td>Wanzele</td>
                    	<td>in.hendrerit@Praesenteunulla.com</td>
                    	<td>(0171) 571 4950</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_26" type="checkbox" />
                                <label for="cb_26" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>26</td>
                    	<td>Jonas</td>
                    	<td>396-5531 Sit Rd.</td>
                    	<td>58311-559</td>
                    	<td>Angers</td>
                    	<td>hendrerit.a@seddictum.co.uk</td>
                    	<td>076 6162 1346</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_27" type="checkbox" />
                                <label for="cb_27" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>27</td>
                    	<td>Isaac</td>
                    	<td>1398 Dictum Ave</td>
                    	<td>89632</td>
                    	<td>Freiberg</td>
                    	<td>Nunc@Integer.ca</td>
                    	<td>0800 1111</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_28" type="checkbox" />
                                <label for="cb_28" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>28</td>
                    	<td>Iris</td>
                    	<td>3435 Ornare Avenue</td>
                    	<td>11303</td>
                    	<td>Kielce</td>
                    	<td>tincidunt.congue@semperNam.com</td>
                    	<td>(029) 8777 8334</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_29" type="checkbox" />
                                <label for="cb_29" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>29</td>
                    	<td>Macy</td>
                    	<td>6953 Vitae Ave</td>
                    	<td>77575</td>
                    	<td>Neerheylissem</td>
                    	<td>nunc.sit@massaVestibulumaccumsan.org</td>
                    	<td>0398 154 5512</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="cb_30" type="checkbox" />
                                <label for="cb_30" class="checkbox__input"></label>
                            </div>
                        </td>
                    	<td>30</td>
                    	<td>Keefe</td>
                    	<td>P.O. Box 444, 5278 Ullamcorper, St.</td>
                    	<td>94849</td>
                    	<td>Aizwal</td>
                    	<td>ridiculus@natoquepenatibuset.co.uk</td>
                    	<td>076 2897 0536</td>
                    	<td><a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:pencil"></iconify-icon></a>
                            <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></a></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="data-table__footer">
                        <td colspan="9">
                            <span class="data-table__results">Showing 1 to 30 of 126 entries</span>
                            <nav class="data-table__pagination">
                                <a href="#" class="pagination-list__nav pagination-list__nav--disabled">Previous</a>
                                <ul class="pagination-list">
                                    <li class="pagination-list__item pagination-list__item--active"><a href="#">1</a></li>
                                    <li class="pagination-list__item"><a href="#">2</a></li>
                                    <li class="pagination-list__item"><a href="#">3</a></li>
                                    <li class="pagination-list__item"><a href="#">4</a></li>
                                    <li class="pagination-list__item"><a href="#">5</a></li>
                                </ul>
                                <a href="#" class="pagination-list__nav">Next</a>
                            </nav>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div id="tableFilter" class="hidden">
                <h1>Filter</h1>
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
                        <a href="#" class="button button--text">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="fab" data-tippy-content="Add customer" tabindex="1">
    <a href="single-add.html" class="fab__button"><iconify-icon data-icon="mdi:plus"></iconify-icon></a>
</div>
```

```overview.js
var tableCheckboxes = document.querySelectorAll('.data-table td input[type="checkbox"]');
var headCheckbox = document.querySelector('.data-table th input[type="checkbox"]');

for (var i = 0, element; element = tableCheckboxes[i]; i++) {
    if (element !== null) {
        element.addEventListener('click', countCheckboxes);
    }
}

function countCheckboxes() {
    var count = 0;
    
    for (var i = 0, element; element = tableCheckboxes[i]; i++) {
        if (element !== null) {
            element.checked ? count++ : null;
        }
    }
    
    if(count > 0) {
        document.querySelector('.data-table').classList.add('data-table--checked');
        document.querySelector('.data-table__selected-count').innerText = count;
        
        if(count == tableCheckboxes.length) {
        headCheckbox.indeterminate = false;
            headCheckbox.checked = true;
        }
        else {
        headCheckbox.indeterminate = true;
            headCheckbox.checked = false;
        }
    }
    else {
        document.querySelector('.data-table').classList.remove('data-table--checked');
        headCheckbox.indeterminate = false;
        headCheckbox.checked = false;
    }
}

headCheckbox.addEventListener('click', allCheckboxes);

function allCheckboxes() {
    for (var i = 0, element; element = tableCheckboxes[i]; i++) {
        if (element !== null) {
            if(headCheckbox.checked == true) {
                element.checked = true;
            }
            else {
                element.checked = false;
            }
        }
    }
    
    if(headCheckbox.checked == true) {
        document.querySelector('.data-table').classList.add('data-table--checked');
        document.querySelector('.data-table__selected-count').innerText = tableCheckboxes.length;
    }
    else {
        document.querySelector('.data-table').classList.remove('data-table--checked');
    }
}

// instanciate new modal
var modal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close"
});

// set content
modal.setContent(document.getElementById('tableFilter').innerHTML);

document.querySelector('.data-table__filter').addEventListener('click', function () {
     modal.open();
 });
```