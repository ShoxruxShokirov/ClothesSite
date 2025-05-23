"use client"

import "./style.scss"
import Item from "./item"
import Modal from "../Modal"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify'

const API_URL = 'http://localhost:3001'

const initialFormState = {
    authorName: "",
    nftName: "",
    nftPrice: "",
    image: "",
    id: ""
}

// Функции для работы с данными
async function getTrendingNFTs() {
    try {
        const response = await fetch(`${API_URL}/trandingNfts`)
        if (!response.ok) throw new Error('Ошибка при получении данных')
        return await response.json()
    } catch (error) {
        console.error('Ошибка:', error)
        return []
    }
}

async function addTrendingNFT(nft) {
    try {
        const response = await fetch(`${API_URL}/trandingNfts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nft),
        })
        if (!response.ok) throw new Error('Ошибка при добавлении')
        return await response.json()
    } catch (error) {
        console.error('Ошибка:', error)
        throw error
    }
}

async function updateTrendingNFTs(nfts) {
    try {
        // Обновляем каждый NFT по отдельности
        for (const nft of nfts) {
            const response = await fetch(`${API_URL}/trandingNfts/${nft.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nft),
            })
            if (!response.ok) throw new Error('Ошибка при обновлении')
        }
    } catch (error) {
        console.error('Ошибка:', error)
        throw error
    }
}

async function deleteTrendingNFT(id) {
    try {
        const response = await fetch(`${API_URL}/trandingNfts/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) throw new Error('Ошибка при удалении')
    } catch (error) {
        console.error('Ошибка:', error)
        throw error
    }
}

function TrendingArt(props) {
    const [form, setForm] = useState(initialFormState)
    const [updateMode, setUpdateMode] = useState(false)
    const [nfts, setNfts] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [nftToDelete, setNftToDelete] = useState(null)

    useEffect(() => {
        loadNFTs()
    }, [])

    async function loadNFTs() {
        const data = await getTrendingNFTs()
        setNfts(data)
    }

    function cleanUp() {
        setForm(initialFormState)
        setUpdateMode(false)
    }

    function handleFormChange(e) {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    async function submitForm(e) {
        e.preventDefault()

        try {
            const dataToSend = {
                authorName: form.authorName,
                name: form.nftName,
                price: form.nftPrice,
                image: form.image,
                id: updateMode ? form.id : Math.random().toString(36).substr(2, 4)
            }

            if (updateMode) {
                await updateTrendingNFTs(nfts.map(nft => 
                    nft.id === form.id ? { ...nft, ...dataToSend } : nft
                ))
            } else {
                await addTrendingNFT(dataToSend)
            }
            await loadNFTs()
            toast.success(updateMode ? "NFT updated successfully" : "NFT created successfully", { theme: "dark" })
        }
        catch (e) {
            toast.error("An error occurred", { theme: "dark" })
        }
        props.handleShowModal(e, false)
        cleanUp()
    }

    function handleUpdateMode(nft) {
        setForm({
            authorName: nft.authorName,
            nftName: nft.name,
            nftPrice: nft.price,
            image: nft.image,
            id: nft.id
        })
        setUpdateMode(true)
    }

    async function handleDelete(nft) {
        setNftToDelete(nft)
        setShowDeleteModal(true)
    }

    async function confirmDelete() {
        try {
            await deleteTrendingNFT(nftToDelete.id)
            await loadNFTs()
            toast.success("NFT deleted successfully", { theme: "dark" })
        }
        catch (e) {
            toast.error("Error deleting NFT", { theme: "dark" })
        }
        setShowDeleteModal(false)
        setNftToDelete(null)
    }

    return (
        <div className="trending-art-wrapper">
            <div className="intro">
                <h1>New Arrivals</h1>
                <p>
                    <button className="create-nft-button"
                        onClick={(e) => { props.handleShowModal(e, true); cleanUp() }}>
                        Create new NFT
                    </button>
                </p>
                {
                    props.showModal &&
                    <Modal handleShowModal={props.handleShowModal}>
                        <form className="create-nft-form" onSubmit={submitForm}>
                            <h1>{updateMode ? "Update NFT" : "Create NFT"}</h1>
                            <div className="form-field">
                                <label htmlFor="author-name">Author Name</label>
                                <input
                                    type="text"
                                    id="author-name"
                                    name="authorName"
                                    placeholder="Enter author name"
                                    value={form.authorName}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="nft-name">NFT Name</label>
                                <input
                                    type="text"
                                    id="nft-name"
                                    name="nftName"
                                    placeholder="Enter NFT name"
                                    value={form.nftName}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="nft-price">NFT Price</label>
                                <input
                                    type="text"
                                    id="nft-price"
                                    name="nftPrice"
                                    placeholder="Enter NFT price"
                                    value={form.nftPrice}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="nft-image">NFT Image URL</label>
                                <input
                                    type="text"
                                    id="nft-image"
                                    name="image"
                                    placeholder="Enter NFT image URL"
                                    value={form.image}
                                    onChange={handleFormChange}
                                />
                                {
                                    form.image &&
                                    <img
                                        src={form.image}
                                        alt="NFT"
                                        width={100} height={100}
                                        onClick={() => { setForm(prev => ({ ...prev, image: "" })) }}
                                        style={{ borderRadius: '10px', cursor: 'pointer' }}
                                    />
                                }
                            </div>
                            <div className="form-field">
                                <button type="submit">
                                    {updateMode ? "Update NFT" : "Create NFT"}
                                </button>
                            </div>
                        </form>
                    </Modal>
                }
                {
                    showDeleteModal && nftToDelete && (
                        <Modal 
                            handleShowModal={setShowDeleteModal}
                            title="Delete Confirmation"
                            description={`Are you sure you want to delete NFT "${nftToDelete.name}"?`}
                            buttons={[
                                {
                                    text: "Cancel",
                                    className: "wallet-b",
                                    onClick: () => setShowDeleteModal(false)
                                },
                                {
                                    text: "Delete",
                                    className: "wallet-a",
                                    onClick: confirmDelete
                                }
                            ]}
                        />
                    )
                }
            </div>

            <div className="nft-items-wrapper">
                {nfts.map(nft => {
                    return (
                        <Item
                            key={nft.id}
                            id={nft.id}
                            name={nft.name}
                            price={nft.price}
                            authorName={nft.authorName}
                            image={nft.image}
                            updateNFT={(e) => { props.handleShowModal(e, true); handleUpdateMode(nft) }}
                            deleteNFT={() => handleDelete(nft)}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default TrendingArt;
