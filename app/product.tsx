import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';

// Komponen untuk menampilkan satu produk kecil
const ProductCard = ({ product }) => {
    const { name, imageUri, price, discountPrice, isPromo } = product;

    return (
        <View style={[styles.productCard, isPromo && styles.promoCard]}>
            {/* Gambar Produk */}
            <Image
                style={styles.productImage}
                source={{ uri: imageUri ? imageUri : 'https://via.placeholder.com/100' }} // Placeholder jika imageUri kosong
                resizeMode="contain"
            />
            <Text style={[styles.productName, isPromo && styles.promoProductName]}>{name}</Text>

            {/* Harga Produk */}
            <View style={styles.priceContainer}>
                {isPromo ? (
                    <>
                        <Text style={styles.discountPrice}>Rp {discountPrice}</Text>
                        <Text style={styles.originalPrice}>Rp {price}</Text>
                    </>
                ) : (
                    <Text style={styles.productPrice}>Rp {price}</Text>
                )}
            </View>

            {/* Label Promo */}
            {isPromo && <View style={styles.promoTagContainer}><Text style={styles.promoTag}>Promo</Text></View>}

            {/* Button Tambah ke Keranjang */}
            <TouchableOpacity style={styles.addButton} onPress={() => console.log('Ditambahkan ke keranjang')}>
                <Text style={styles.addButtonText}>Tambah ke Keranjang</Text>
            </TouchableOpacity>
        </View>
    );
};

const productList = [
    { id: '1', name: 'Produk 1', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E45JPMAiReaHQ86mYWLzojqjl_UnQQHtKg&s', price: 100000, discountPrice: 80000, isPromo: true },
    { id: '2', name: 'Produk 2', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 50000, discountPrice: null, isPromo: false },
    { id: '3', name: 'Produk 3', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 200000, discountPrice: 150000, isPromo: true },
    { id: '4', name: 'Produk 4', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E45JPMAiReaHQ86mYWLzojqjl_UnQQHtKg&s', price: 80000, discountPrice: null, isPromo: false },
    { id: '5', name: 'Produk 5', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 120000, discountPrice: 100000, isPromo: true },
    { id: '6', name: 'Produk 6', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 60000, discountPrice: null, isPromo: false },
    { id: '9', name: 'Produk 9', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 90000, discountPrice: 80000, isPromo: true },
    { id: '10', name: 'Produk 10', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 110000, discountPrice: null, isPromo: false },
    { id: '11', name: 'Produk 11', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 50000, discountPrice: 45000, isPromo: true },
    { id: '12', name: 'Produk 12', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E45JPMAiReaHQ86mYWLzojqjl_UnQQHtKg&s', price: 30000, discountPrice: null, isPromo: false },
    { id: '13', name: 'Produk 13', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 75000, discountPrice: 65000, isPromo: true },
    { id: '14', name: 'Produk 14', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s', price: 100000, discountPrice: null, isPromo: false },
];

// Halaman utama produk
const ProductPage = () => {
    const renderItem = ({ item }) => <ProductCard product={item} />;

    // Memisahkan produk promo dan non-promo
    const promoProducts = productList.filter(item => item.isPromo);
    const nonPromoProducts = productList.filter(item => !item.isPromo);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Produk Promo</Text>

            {/* Menampilkan daftar produk promo */}
            <FlatList
                data={promoProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}  // Menampilkan dalam 3 kolom per baris
                contentContainerStyle={styles.gridContainer}
            />

            <Text style={styles.header}>Produk Lainnya</Text>

            {/* Menampilkan daftar produk non-promo */}
            <FlatList
                data={nonPromoProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}  // Menampilkan dalam 3 kolom per baris
                contentContainerStyle={styles.gridContainer}
            />
        </ScrollView>
    );
};

export default ProductPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5F5DC',  // Warna latar belakang yang lebih soft, bisa diganti sesuai tema
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',  // Warna teks header
    },
    gridContainer: {
        justifyContent: 'space-around',
    },
    productCard: {
        flex: 1,
        marginBottom: 15,
        marginHorizontal: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Warna background untuk produk biasa
    },
    promoCard: {
        backgroundColor: '#fffbf1', // Warna latar belakang produk promo
        borderWidth: 2,
    },
    productImage: {
        width: 80,
        height: 80,
        marginBottom: 5,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    promoProductName: {
        color: '#ff5722', // Warna teks untuk produk promo
    },
    priceContainer: {
        marginVertical: 5,
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    discountPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ff5722', // Promo price color
    },
    originalPrice: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        color: '#888',
    },
    promoTagContainer: {
        marginVertical: 5,
        alignItems: 'center',
    },
    promoTag: {
        backgroundColor: '#ff5722',
        color: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 12,
    },
});
