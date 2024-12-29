import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Selamat datang di Toko Hijab Kami</Text>
                <Text style={styles.subtitle}>Temukan hijab terbaik untuk setiap kesempatan</Text>
            </View>

            {/* Produk Unggulan */}
            <View style={styles.featuredSection}>
                <Text style={styles.sectionTitle}>Produk Unggulan</Text>
                <View style={styles.productsContainer}>
                    {/* Produk Unggulan 1 */}
                    <View style={styles.productCard}>
                        <Image
                            style={styles.productImage}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryk2zv8jfJQRTCcN69JMVtV-C0CbOSLpmg&s' }}  // Ganti dengan URL gambar produk asli
                        />
                        <Text style={styles.productText}>Hijab A</Text>
                        <Button title="Lihat" onPress={() => alert('Lihat Produk A')} />
                    </View>

                    {/* Produk Unggulan 2 */}
                    <View style={styles.productCard}>
                        <Image
                            style={styles.productImage}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E45JPMAiReaHQ86mYWLzojqjl_UnQQHtKg&s' }}  // Ganti dengan URL gambar produk asli
                        />
                        <Text style={styles.productText}>Hijab B</Text>
                        <Button title="Lihat" onPress={() => alert('Lihat Produk B')} />
                    </View>

                    {/* Produk Unggulan 3 */}
                    <View style={styles.productCard}>
                        <Image
                            style={styles.productImage}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv7B2edWZdDZvdgmq7V9BT04mS-TAmj5Ibw&s' }}  // Ganti dengan URL gambar produk asli
                        />
                        <Text style={styles.productText}>Hijab C</Text>
                        <Button title="Lihat" onPress={() => alert('Lihat Produk C')} />
                    </View>
                </View>
            </View>

            {/* Kategori Belanja */}
            <View style={styles.categoriesSection}>
                <Text style={styles.sectionTitle}>Belanja Berdasarkan Kategori</Text>
                <View style={styles.categoriesContainer}>
                    {/* Kategori 1: Produk Terbaru */}
                    <View style={styles.categoryCard}>
                        <Image
                            style={styles.categoryImage}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-RpUl00KOFQ00Ts2ai1yEgBUkCTCHVRSAQ&s' }} // Ganti dengan gambar kategori
                        />
                        <Text style={styles.categoryText}>Produk Terbaru</Text>
                    </View>

                    {/* Kategori 2: Best Seller */}
                    <View style={styles.categoryCard}>
                        <Image
                            style={styles.categoryImage}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22z3cV3ob_Yx_TxriSH3HQtB6deq1ewyb_g&s' }} // Ganti dengan gambar kategori
                        />
                        <Text style={styles.categoryText}>Best Seller</Text>
                    </View>

                    {/* Kategori 3: Penawaran Spesial */}
                    <View style={styles.categoryCard}>
                        <Image
                            style={styles.categoryImage}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVUBKMVupXDSzYbQz_HJE5ufy0Y01f2vJug&s' }} // Ganti dengan gambar kategori
                        />
                        <Text style={styles.categoryText}>Penawaran Spesial</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

// Gaya untuk tampilan Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC', // Warna latar belakang Beige
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#006400', // Header hijau tua
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    featuredSection: {
        padding: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#006400',
    },
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    productCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        width: '30%',
        alignItems: 'center',
        elevation: 3, // Menambahkan bayangan pada kartu produk
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    productText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoriesSection: {
        padding: 20,
        marginTop: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    categoryCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
        elevation: 3, // Menambahkan bayangan pada kategori
        padding: 10,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;
