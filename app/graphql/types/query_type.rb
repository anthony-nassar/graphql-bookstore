module Types
  class QueryType < Types::BaseObject
    description "root query"

    field :authors, [Types::AuthorType], null: true do
      description "gets all authors"
    end

    field :author, Types::AuthorType, null: true do
      description "Find a aauthor by id"
      argument :id, ID, required: true
    end

    field :books, [BookType], null: true do
      description "Get all Books"
    end

    field :book, Types::BookType, null: true do
      description "Find a book by id"
      argument :id, ID, required: true
    end

    def authors
      Author.all
    end

    def author(id:)
      Author.find(id)
    end

    def books
      Book.all
    end

    def book(id:)
      Book.find(id)
    end

  end
end

