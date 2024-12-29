import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';

// Komponen untuk menampilkan satu produk di dalam keranjang
const CartItem = ({ product, onRemove }) => {
  const { name, imageUri, price, discountPrice, quantity } = product;
  const finalPrice = discountPrice ? discountPrice : price;

  return (
    <View style={styles.cartItem}>
      {/* Gambar Produk */}
      <Image
        style={styles.productImage}
        source={{ uri: imageUri ? imageUri : 'https://via.placeholder.com/100' }}
        resizeMode="contain"
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productQuantity}>Jumlah: {quantity}</Text>

        {/* Harga Produk */}
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>Rp {finalPrice * quantity}</Text>
        </View>
      </View>

      {/* Tombol Hapus */}
      <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(product.id)}>
        <Text style={styles.removeButtonText}>Hapus</Text>
      </TouchableOpacity>
    </View>
  );
};

// Halaman Keranjang Belanja
const CartPage = () => {
  const [cart, setCart] = useState([
    { id: '1', name: 'Produk 1', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E45JPMAiReaHQ86mYWLzojqjl_UnQQHtKg&s', price: 100000, discountPrice: 80000, quantity: 1 },
    { id: '2', name: 'Produk 2', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 50000, discountPrice: null, quantity: 2 },
    { id: '3', name: 'Produk 3', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E45JPMAiReaHQ86mYWLzojqjl_UnQQHtKg&s', price: 200000, discountPrice: 150000, quantity: 1 },
  ]);

  // Fungsi untuk menghapus produk dari keranjang
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Menghitung total harga keranjang
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const finalPrice = product.discountPrice ? product.discountPrice : product.price;
      return total + finalPrice * product.quantity;
    }, 0);
  };

  // Menghitung total jumlah produk di keranjang
  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Keranjang Belanja</Text>

      {/* Main content: List of cart items and total */}
      <ScrollView style={styles.mainContent}>
        {/* Menampilkan daftar produk di keranjang */}
        <FlatList
          data={cart}
          renderItem={({ item }) => <CartItem product={item} onRemove={removeFromCart} />}
          keyExtractor={(item) => item.id}
        />

        {/* Total Jumlah Produk */}
        <View style={styles.totalQuantityContainer}>
          <Text style={styles.totalQuantityText}>Jumlah Barang: {calculateTotalQuantity()}</Text>
        </View>

        {/* Total Harga */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: Rp {calculateTotal()}</Text>
        </View>
      </ScrollView>

      {/* Tombol untuk melanjutkan ke pembayaran */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Lanjutkan ke Pembayaran</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 12,
    marginVertical: 5,
  },
  priceContainer: {
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  totalQuantityContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  totalQuantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
