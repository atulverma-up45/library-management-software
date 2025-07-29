export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  quantity: number;
  available: number;
  summary?: string;
  coverUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
  borrowedBooks: string[];
  fines?: number;
}

export interface BorrowTransaction {
  id: string;
  bookId: string;
  userId: string;
  issueDate: Date;
  returnDate?: Date;
  dueDate: Date;
  status: 'active' | 'returned' | 'overdue';
}

export interface LibraryContextType {
  books: Book[];
  users: User[];
  transactions: BorrowTransaction[];
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addBook: (book: Omit<Book, 'id'>) => void;
  updateBook: (id: string, book: Partial<Book>) => void;
  deleteBook: (id: string) => void;
  borrowBook: (bookId: string, userId: string) => boolean;
  returnBook: (transactionId: string) => void;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
}