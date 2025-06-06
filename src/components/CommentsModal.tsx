import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { Comment } from '../types/Comment';
import { generateInitialComments } from '../data/comments';

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  productName: string;
}

const CommentsModal: React.FC<CommentsModalProps> = ({
  isOpen,
  onClose,
  productId,
  productName,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', text: '' });

  useEffect(() => {
    if (isOpen) {
      setComments(generateInitialComments(productId));
    }
  }, [isOpen, productId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.text.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: newComment.author,
        text: newComment.text,
        date: new Date().toLocaleDateString('pt-BR'),
        rating: Math.floor(Math.random() * 5) + 1,
      };
      setComments([...comments, comment]);
      setNewComment({ author: '', text: '' });
    }
  };

  if (!isOpen) return null;

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Comentários - {productName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Nenhum comentário ainda. Seja o primeiro!
            </p>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500 text-sm">
                        {renderStars(comment.rating)}
                      </span>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={newComment.author}
              onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
              placeholder="Seu nome"
              className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              required
            />
            <textarea
              value={newComment.text}
              onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
              placeholder="Escreva seu comentário..."
              rows={3}
              className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
              required
            />
            <button
              type="submit"
              className="animated-button w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Comentário</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;