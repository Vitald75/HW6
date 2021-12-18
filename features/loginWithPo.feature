Feature: Fill and check User form
  Background: Successful login
    When I go to "https://viktor-silakov.github.io/course-sut/?quick"
    When I login as: "walker@jw.com", "password"

  Scenario Outline: Successful fill User form
    When I go to "Create User" menu item
    When I wait for "1" second
    When I fill User form: "<email>" "<password>" "<address1>" "<address2>" "<city>" "<zip>" "<anual>" "<description>"
    When I wait for "1" second
    When I logout
    Examples:
      | email    | password | address1 | address2 | city  | zip    | anual | description |
      | 11111@wq | 1231     | addr1    | addrs2   | Minsk | 234456 | 100   | decriptoin  |
      | 22222@wq | 22222    | addr21   | addrs22  | Min2  | 22222  | 200   | decriptoin  |
      | 33333@wq | 3333     | addr333  | addrs33  | Min3  | 323333 | 300   | decriptoin  |


  Scenario: Successful fill Subscribe form
    When I go to "Create Subscription" menu item
    When I wait for "1" second
    When I fill form:
      """"""
      plan : "Education"
      years : 1
      user : "11111@wq"
      total : 100
      description : "some notes"
      suspend : false
      """"""

    When I go to "Create Subscription" menu item
    When I wait for "1" second
    When I fill form:
      """"""
      plan : "Premium"
      years : 2
      user : "22222@wq"
      total : 400
      description : "some notes2"
      suspend : true
      """"""

    When I go to "Create Subscription" menu item
    When I wait for "1" second
    When I fill form:
      """"""
      plan : "Enterprise"
      years : 3
      user : "33333@wq"
      total : 900
      description : "some notes3"
      suspend : false
      """"""


