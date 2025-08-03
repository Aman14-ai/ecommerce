'use client'
import React, { useEffect, useState } from 'react'
import { calculateSubtotal } from '@/actions/action'
import {motion} from 'framer-motion'
import { ArrowRightCircle, BadgeCheck, Wallet } from 'lucide-react'

const Subtotal = () => {
    
    const [value , setValue] = useState(0);

    const getSubtotal = async() => {
        const subtotal = await calculateSubtotal();
        if(!subtotal) return null;
        setValue(subtotal)
    }
    useEffect(() => {
        getSubtotal();
    }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden"
    >
      {/* Decorative background animation */}
      <motion.div 
        
      />
      
      <div className="relative flex justify-between items-center p-6 rounded-xl border border-gray-200  shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <Wallet className="h-6 w-6 text-indigo-600" />
          </motion.div>
          <span className="text-lg font-medium text-gray-700 mr-4">Subtotal:</span>
        </div>
        
        <div className="flex items-center gap-2">
          <motion.span 
            className="text-xl font-bold text-gray-900"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
          >
            ${value.toFixed(2)}
          </motion.span>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-emerald-500"
          >
            <BadgeCheck className="h-5 w-5" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-3 flex items-center justify-center gap-2 text-sm text-indigo-600 cursor-pointer"
        whileHover={{ x: 5 }}
      >
        <span>Proceed to checkout</span>
        <ArrowRightCircle className="h-4 w-4" />
      </motion.div>
    </motion.div>
  )
}

export default Subtotal
