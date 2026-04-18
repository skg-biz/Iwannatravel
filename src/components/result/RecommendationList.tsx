'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TravelPersonality, PriceRange } from '@/lib/quiz/types';
import { TravelProduct } from '@/lib/myrealtrip/types';
import PriceRangeSelector from '@/components/ui/PriceRangeSelector';

interface RecommendationListProps {
  type: TravelPersonality;
}

export default function RecommendationList({ type }: RecommendationListProps) {
  const [priceRange, setPriceRange] = useState<PriceRange>('mid');
  const [products, setProducts] = useState<TravelProduct[]>([]);
  const [searchUrl, setSearchUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/recommendations?type=${type}&priceRange=${priceRange}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products ?? []);
        setSearchUrl(data.searchUrl ?? '');
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [type, priceRange]);

  return (
    <div className="w-full space-y-6">
      <h3 className="text-center text-lg font-bold">추천 여행 상품</h3>
      <PriceRangeSelector selected={priceRange} onChange={setPriceRange} />

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-purple-500" />
        </div>
      ) : (
        <div className="space-y-3">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-foreground/10 bg-white/60 p-4 dark:bg-white/5"
            >
              {/* Product info */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-3xl">
                  {product.imageEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold">{product.title}</div>
                  <div className="mt-1 text-sm text-foreground/50">{product.description}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {product.price.toLocaleString()}원~
                    </span>
                    <span className="text-xs text-foreground/40">
                      ⭐ {product.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking buttons */}
              <div className="mt-3 flex gap-2">
                <a
                  href={product.tripComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-500 px-3 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-600 active:scale-95"
                >
                  <span>🛫</span>
                  <span>Trip.com 예약</span>
                </a>
                <a
                  href={product.myrealTripUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-purple-400 px-3 py-2.5 text-sm font-semibold text-purple-600 transition-all hover:bg-purple-50 active:scale-95 dark:text-purple-400 dark:hover:bg-purple-900/20"
                >
                  <span>🗺️</span>
                  <span>마이리얼트립</span>
                </a>
              </div>
            </motion.div>
          ))}

          {searchUrl && (
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border-2 border-dashed border-foreground/10 p-4 text-center text-sm font-medium text-foreground/50 transition-colors hover:border-purple-300 hover:text-purple-500"
            >
              마이리얼트립에서 더 많은 상품 보기 →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
