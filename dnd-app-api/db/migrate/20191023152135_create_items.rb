class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :category
      t.string :description
      t.string :stats

      t.timestamps
    end
  end
end
