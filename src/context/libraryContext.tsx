"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book, User, BorrowTransaction, LibraryContextType } from '@/types/library';

// Mock data
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Fiction',
    isbn: '978-0-7432-7356-5',
    quantity: 5,
    available: 3,
    summary: 'A classic American novel set in the Jazz Age.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    isbn: '978-0-06-112008-4',
    quantity: 4,
    available: 2,
    summary: 'A gripping tale of racial injustice and childhood innocence.',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    category: 'Computer Science',
    isbn: '978-0-262-03384-8',
    quantity: 3,
    available: 1,
    summary: 'Comprehensive guide to algorithms and data structures.',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Computer Science',
    isbn: '978-0-13-235088-4',
    quantity: 6,
    available: 4,
    summary: 'A handbook of agile software craftsmanship.',
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'History',
    isbn: '978-0-06-231609-7',
    quantity: 4,
    available: 0,
    summary: 'A brief history of humankind.',
    coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop'
  },
];

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@library.edu',
    role: 'admin',
    borrowedBooks: [],
    fines: 0
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john.smith@university.edu',
    role: 'student',
    borrowedBooks: ['1', '5'],
    fines: 5.50
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.wilson@university.edu',
    role: 'student',
    borrowedBooks: ['3'],
    fines: 0
  }
];

const mockTransactions: BorrowTransaction[] = [
  {
    id: '1',
    bookId: '1',
    userId: '2',
    issueDate: new Date('2024-01-15'),
    dueDate: new Date('2024-02-15'),
    status: 'active'
  },
  {
    id: '2',
    bookId: '5',
    userId: '2',
    issueDate: new Date('2024-01-10'),
    dueDate: new Date('2024-02-10'),
    status: 'overdue'
  },
  {
    id: '3',
    bookId: '3',
    userId: '3',
    issueDate: new Date('2024-01-20'),
    dueDate: new Date('2024-02-20'),
    status: 'active'
  }
];

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [transactions, setTransactions] = useState<BorrowTransaction[]>(mockTransactions);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    // Simple mock authentication
    const user = users.find(u => u.email === email);
    if (user && password === 'password') {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addBook = (book: Omit<Book, 'id'>) => {
    const newBook: Book = {
      ...book,
      id: Date.now().toString(),
      available: book.quantity
    };
    setBooks(prev => [...prev, newBook]);
  };

  const updateBook = (id: string, updatedBook: Partial<Book>) => {
    setBooks(prev => prev.map(book => 
      book.id === id ? { ...book, ...updatedBook } : book
    ));
  };

  const deleteBook = (id: string) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const borrowBook = (bookId: string, userId: string): boolean => {
    const book = books.find(b => b.id === bookId);
    if (!book || book.available === 0) return false;

    const newTransaction: BorrowTransaction = {
      id: Date.now().toString(),
      bookId,
      userId,
      issueDate: new Date(),
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      status: 'active'
    };

    setTransactions(prev => [...prev, newTransaction]);
    setBooks(prev => prev.map(b => 
      b.id === bookId ? { ...b, available: b.available - 1 } : b
    ));
    setUsers(prev => prev.map(u => 
      u.id === userId ? { ...u, borrowedBooks: [...u.borrowedBooks, bookId] } : u
    ));

    return true;
  };

  const returnBook = (transactionId: string) => {
    const transaction = transactions.find(t => t.id === transactionId);
    if (!transaction) return;

    setTransactions(prev => prev.map(t => 
      t.id === transactionId ? { ...t, status: 'returned' as const, returnDate: new Date() } : t
    ));
    setBooks(prev => prev.map(b => 
      b.id === transaction.bookId ? { ...b, available: b.available + 1 } : b
    ));
    setUsers(prev => prev.map(u => 
      u.id === transaction.userId ? { 
        ...u, 
        borrowedBooks: u.borrowedBooks.filter(bookId => bookId !== transaction.bookId) 
      } : u
    ));
  };

  const addUser = (user: Omit<User, 'id'>) => {
    const newUser: User = {
      ...user,
      id: Date.now().toString(),
      borrowedBooks: [],
      fines: 0
    };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = (id: string, updatedUser: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updatedUser } : user
    ));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const value: LibraryContextType = {
    books,
    users,
    transactions,
    currentUser,
    login,
    logout,
    addBook,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook,
    addUser,
    updateUser,
    deleteUser
  };

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
}