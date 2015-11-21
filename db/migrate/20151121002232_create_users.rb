class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :language
      t.string :gender
      t.string :current_location
      t.string :search_history
      t.date :date_of_birth
      t.string :education
      t.string :profession
      t.text :other_information

      t.timestamps null: false
    end
    add_index :users, :email, unique: true
  end
end
