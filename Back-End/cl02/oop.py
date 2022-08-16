class Person:
    company = "clarusway"

    def test(self):
        print("test")

    def set_details(self, name, age):
        self.name = name
        self.age = age

    def get_details(self):
        print(self.name, self.age)


@staticmethod
def salute():
    print("Hi there!")


person1 = Person()
person2 = Person()

# person1.test()
# Person.test()

person1.set_details("barry", 20)
person1.get_details()
print(person1.name)