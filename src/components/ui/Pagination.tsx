'use client';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  // Show max 5 pages, centered around current if possible
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);
  
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const btnStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: '#141416',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: 600,
  };

  const activeBtnStyle = {
    ...btnStyle,
    backgroundColor: '#06B6D4',
    borderColor: '#06B6D4',
  };

  const disabledBtnStyle = {
    ...btnStyle,
    opacity: 0.5,
    cursor: 'not-allowed',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '2rem' }}>
      <button 
        style={currentPage === 1 ? disabledBtnStyle : btnStyle}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {startPage > 1 && (
        <>
          <button style={btnStyle} onClick={() => onPageChange(1)}>1</button>
          {startPage > 2 && <span style={{ color: '#9CA3AF' }}>...</span>}
        </>
      )}

      {pages.map(page => (
        <button 
          key={page}
          style={page === currentPage ? activeBtnStyle : btnStyle}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span style={{ color: '#9CA3AF' }}>...</span>}
          <button style={btnStyle} onClick={() => onPageChange(totalPages)}>{totalPages}</button>
        </>
      )}

      <button 
        style={currentPage === totalPages ? disabledBtnStyle : btnStyle}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
