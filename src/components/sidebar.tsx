// "use client"
// import  Link  from 'next/link';
// import { useLibrary } from '@/context/libraryContext';
// import { 
//   BookOpen, 
//   Users, 
//   Plus, 
//   FileText, 
//   LogOut,
//   Home,

// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';

// const Sidebar = () => {
//   const { currentUser, logout } = useLibrary();

//   const isAdmin = currentUser?.role === 'admin';

//   const navigationItems = [
//     { title: 'Dashboard', url: '/dashboard', icon: Home },
//     { title: 'Books', url: '/dashboard/books', icon: BookOpen },
//     ...(isAdmin ? [{ title: 'Users', url: '/dashboard/users', icon: Users }] : []),
//     ...(isAdmin ? [{ title: 'Add Book', url: '/dashboard/add-book', icon: Plus }] : []),
//     { title: 'Issued Books', url: '/dashboard/issued', icon: FileText },
//   ];

//   // @typescript-eslint/no-unused-vars
//   // const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
//   //   `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
//   //     isActive
//   //       ? 'bg-library-primary text-white shadow-md'
//   //       : 'text-library-primary hover:bg-library-primary/10 hover:text-library-primary'
//   //   }`;

//   return (
//     <div className="h-full w-64 bg-white border-r border-gray-200 flex flex-col">
//       {/* Header */}
//       <div className="p-6 border-b border-gray-200">
//         <div className="flex items-center gap-3">
//           <div className="bg-library-primary p-2 rounded-lg">
//             <BookOpen className="h-6 w-6 text-white" />
//           </div>
//           <div>
//             <h2 className="font-bold text-library-primary">Library</h2>
//             <p className="text-sm text-muted-foreground">Management</p>
//           </div>
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="p-4 border-b border-gray-200">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-library-accent rounded-full flex items-center justify-center">
//             <span className="text-white font-semibold text-sm">
//               {currentUser?.name.charAt(0).toUpperCase()}
//             </span>
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="font-medium text-library-primary truncate">
//               {currentUser?.name}
//             </p>
//             <p className="text-sm text-muted-foreground capitalize">
//               {currentUser?.role}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 space-y-2">
//         {navigationItems.map((item) => (
//           <Link
//             key={item.url}
            
            
//             href={'/dashboard'}
//           >
//             <item.icon className="h-5 w-5" />
//             <span className="font-medium">{item.title}</span>
//           </Link>
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="p-4 border-t border-gray-200">
//         <Separator className="mb-4" />
//         <Button
//           variant="ghost"
//           onClick={logout}
//           className="w-full justify-start text-library-primary hover:bg-red-50 hover:text-red-600"
//         >
//           <LogOut className="h-5 w-5 mr-3" />
//           Sign Out
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;