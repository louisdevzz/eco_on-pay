use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct UserAccount{
    pub name: String, //4 + 256
    pub avatar: String, //4 + 2048
    pub authority: Pubkey,
    pub role: String, // 32
}

#[account]
#[derive(Default)]
pub struct SellerAccount {
    pub name: String, // 4 + 256
    pub avatar: String,
    pub user: Pubkey,        // 4 + 2048
    pub authority: Pubkey,   // 32
    pub name_shop: String,
    pub last_product_id: u8, // 1
    pub product_count: u8,
    pub role: String,   // 1
}

#[account]
#[derive(Default)]
pub struct ProductAccount {
    pub id: u8,
    pub user: Pubkey,
    pub authority: Pubkey,
    pub title: String,    // 4 + 2048
    pub about: String,    // 4 + 2048
    pub price: String,        // 1
    pub color: String,    // 4 + 256
    pub images: String,   // 4 + 2048
    pub category: String, // 4 + 2048
    pub size: String,     // 4 + 256
    pub quanlity: String,     //1
    pub votes: String,        //1
                          //4106 + 4107 + 520 8798 + 259 + 259
}
