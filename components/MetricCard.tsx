import { LucideIcon } from 'lucide-react-native'; // Suporta qualquer ícone Lucide passado como componente
import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardContent } from './ui/Card';

type MetricCardProps = {
  icon: LucideIcon;
  value: string | number;
  label: string;
};

export default function MetricCard({ icon: Icon, value, label }: MetricCardProps) {
  return (
    <Card className="items-center p-4 rounded-2xl shadow-sm">
      <CardContent className="items-center">
        <View className="mb-2">
          <Icon size={28} strokeWidth={1.5} />
        </View>
        <Text className="text-2xl font-bold">{value}</Text>
        <Text className="text-sm text-muted-foreground mt-1 text-center">{label}</Text>
      </CardContent>
    </Card>
  );
}
