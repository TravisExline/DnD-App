# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

deck_of_many_things = Item.create(name: "Deck of Many Things", category: "Magical", description: "Rare, magical deck of cards", stats: "A player can draw up to four cards, each possessing a powerful ability" )

phil_stone = Item.create(name: "Philosopher's Stone", category: "Magical/Transmutation", description: "Small, magical stone", stats: "Grants the user the ability to turn lead to gold")

magi_staff = Item.create(name: "Staff of the Magi", category: "Weapon/Staff", description: "An ornate bronze staff", stats: "Allows the user to case a variety of spells; finite charges" )

orcus_wand = Item.create(name: "Wand of Orcus", category: "Weapon/Wand", description: "The wand once wielded by the demon Orcus", stats: "A magical wand that doubles as a mace" )

reg_of_might = Item.create(name: "Regalia of Might", category: "Armor", description: "An orb, a crown, and a scepter", stats: "+4 to all" )

wonder = Item.create(name: "Rod of Wonder", category: "Weapon/Wand", description: "A magical wand capable of destruction", stats: "Roullete spells" )