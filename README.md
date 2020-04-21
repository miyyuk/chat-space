# README

# chatspace DBdesign
## users table
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false, index: true|
### Association
- has_many :groups,  through: :users_groups
- has_many :users_groups
- has_many :messages

## groups table
|Column|Type|Options|
|------|----|-------|
|groupname|text|null: false|
### Association
- has_many :users,  through:  :users_groups
- has_many :users_groups
- has_many :messages

## users_groups table
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messages table
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
