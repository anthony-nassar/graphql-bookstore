class Types::BookType < GraphQL::Schema::Object
  field :idm, ID, null: true
  field :title, String, null: true
  field :genre, String, null: true
  field :author_id, ID, null: true
  field :author, AuthorType, null: false
end
