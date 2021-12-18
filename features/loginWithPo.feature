Feature: Fill and check User form
  Background: Successful login
    When I go to "https://viktor-silakov.github.io/course-sut/?quick"
    When I login as: "walker@jw.com", "password"

  Scenario Outline: Successful fill User form
    # When I wait for "10" second
    When I go to "Create User" menu item
    When I wait for "1" second
    When I fill User form: "<email>" "<password>" "<address1>" "<address2>" "<city>" "<zip>" "<anual>" "<description>"

    # When I click on Login submitButton
    # When I go to "List of users" menu item
    When I wait for "1" second
    When I logout
    Examples:
      | email    | password | address1 | address2 | city  | zip    | anual | description |
      | 11111@wq | 1231     | addr1    | addrs2   | Minsk | 234456 | 111   | decriptoin  |
      | 22222@wq | 22222    | addr21   | addrs22  | Min2  | 22222  | 222   | decriptoin  |
      | 33333@wq | 3333     | addr333  | addrs33  | Min3  | 323333 | 333   | decriptoin  |


  Scenario: Successful fill Subscribe form
    When I go to "Create Subscription" menu item
    When I wait for "1" second
    When I fill form:
      """"""
      plan : "Education"
      years : 2
      user : "11111@wq"
      total : 10
      description : "some notes"
      suspend : false
      """"""
    When I wait for "1" second

    When I go to "Create Subscription" menu item
    When I wait for "1" second
    When I fill form:
      """"""
      plan : "Premium"
      years : 2
      user : "22222@wq"
      total : 25
      description : "some notes2"
      suspend : true
      """"""
    When I wait for "1" second

    When I go to "Create Subscription" menu item
    When I wait for "1" second
    When I fill form:
      """"""
      plan : "Enterprise"
      years : 4
      user : "33333@wq"
      total : 50
      description : "some notes3"
      suspend : false
      """"""
    When I wait for "2" second

